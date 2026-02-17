import { useState, useEffect } from 'react';

const NORWEGIAN_MONTHS = [
  'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'
];

function parseCSV(text) {
  const lines = text.trim().split('\n');
  const result = [];
  for (const line of lines) {
    const row = [];
    let current = '';
    let inQuotes = false;
    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        row.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    row.push(current.trim());
    result.push(row);
  }
  return result;
}

function extractSheetId(url) {
  const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

function parseDate(dateStr) {
  if (!dateStr) return null;
  const cleaned = dateStr.replace(/^["']|["']$/g, '').trim();

  // DD.MM.YYYY
  let match = cleaned.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (match) {
    return new Date(parseInt(match[3]), parseInt(match[2]) - 1, parseInt(match[1]));
  }

  // YYYY-MM-DD
  match = cleaned.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (match) {
    return new Date(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3]));
  }

  // DD/MM/YYYY
  match = cleaned.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (match) {
    return new Date(parseInt(match[3]), parseInt(match[2]) - 1, parseInt(match[1]));
  }

  // Fallback
  const parsed = new Date(cleaned);
  return isNaN(parsed.getTime()) ? null : parsed;
}

export function formatDateNorwegian(date) {
  const day = date.getDate();
  const month = NORWEGIAN_MONTHS[date.getMonth()];
  const year = date.getFullYear();
  return `${day}. ${month} ${year}`;
}

export default function useCourseDates() {
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasCapacityInfo, setHasCapacityInfo] = useState(false);

  useEffect(() => {
    const scriptUrl = import.meta.env.VITE_GOOGLE_SHEETS_SCRIPT_URL;
    const sheetUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;

    let fetchUrl = null;
    if (scriptUrl) {
      fetchUrl = scriptUrl.replace(/\/$/, '');
    } else if (sheetUrl) {
      const sheetId = extractSheetId(sheetUrl);
      if (sheetId) {
        const sheetCsvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv`;
        fetchUrl = import.meta.env.PROD
          ? `https://api.allorigins.win/raw?url=${encodeURIComponent(sheetCsvUrl)}`
          : sheetCsvUrl;
      }
    }

    if (!fetchUrl) {
      setLoading(false);
      return;
    }

    fetch(fetchUrl)
      .then(res => {
        if (!res.ok) throw new Error('Fetch failed');
        return res.text();
      })
      .then(csv => {
        const rows = parseCSV(csv);
        if (rows.length < 2) {
          setLoading(false);
          return;
        }

        const dataRows = rows.slice(1);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let hasCapacity = false;

        const parsedDates = dataRows
          .map(row => {
            const dato = row[0] || '';
            const kapasitet = row[1] || '';
            const antallPameldte = row[2] || '';
            const ledigePlasser = row[3] || '';

            const dateObj = parseDate(dato);
            if (!dateObj) return null;

            const kapasitetNum = parseInt(kapasitet);
            const antallPameldteNum = parseInt(antallPameldte);
            const ledigePlasserNum = parseInt(ledigePlasser);

            if (!isNaN(kapasitetNum) && kapasitetNum > 0) {
              hasCapacity = true;
            }

            return {
              date: dateObj,
              dateFormatted: formatDateNorwegian(dateObj),
              dateISO: dateObj.toISOString().split('T')[0],
              kapasitet: isNaN(kapasitetNum) ? null : kapasitetNum,
              antallPameldte: isNaN(antallPameldteNum) ? null : antallPameldteNum,
              ledigePlasser: isNaN(ledigePlasserNum) ? null : ledigePlasserNum,
              isFull: !isNaN(kapasitetNum) && kapasitetNum > 0 && !isNaN(ledigePlasserNum) && ledigePlasserNum <= 0,
            };
          })
          .filter(d => d !== null && d.date >= today)
          .sort((a, b) => a.date - b.date);

        setDates(parsedDates);
        setHasCapacityInfo(hasCapacity);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch course dates:', err);
        setLoading(false);
      });
  }, []);

  return { dates, loading, hasCapacityInfo };
}
