# 📝 Placeholder Guide

This document lists all the placeholders in the landing page that need to be replaced with actual content.

## 🎨 How to Identify Placeholders

Placeholders are styled with a **bright yellow background with dashed borders** to make them impossible to miss. They look like this:

```
[X] [Dato] [TBD] [navn] [epost] [telefon] [Fyll inn]
```

## 📍 Where to Edit

All placeholders are in: `src/components/LandingPage.jsx`

## 🔄 Placeholders to Replace

### 1. **[X]** - Number of remaining spots
- **Appears:** 2 times (Hero section, Final CTA)
- **Example:** Replace `[X]` with `12` or `5`
- **Location:** Lines with `<Placeholder>[X]</Placeholder>`

### 2. **[Dato]** - Course date and time
- **Appears:** 3 times (Hero section, Practical details, Final CTA)
- **Example:** Replace `[Dato]` with `15. januar 2024, kl. 09:00-15:00`
- **Location:** Lines with `<Placeholder>[Dato]</Placeholder>`

### 3. **[TBD]** - Location/venue
- **Appears:** 1 time (Practical details section)
- **Example:** Replace `[TBD]` with `Oslo Kongressenter, Rom A204`
- **Location:** Practical details section

### 4. **[Fyll inn]** - Price
- **Appears:** 1 time (Practical details section)
- **Example:** Replace `[Fyll inn]` with `4.990`
- **Location:** Price line in practical details

### 5. **[navn]** - Contact person name
- **Appears:** 2 times (FAQ section, Final CTA)
- **Example:** Replace `[navn]` with `Andreas Pedersen`
- **Location:** FAQ answer and final contact section

### 6. **[epost]** - Contact email
- **Appears:** 2 times (FAQ section, Final CTA)
- **Example:** Replace `[epost]` with `andreas@initech.no`
- **Location:** FAQ answer and final contact section

### 7. **[telefon]** - Contact phone
- **Appears:** 2 times (FAQ section, Final CTA)
- **Example:** Replace `[telefon]` with `+47 123 45 678`
- **Location:** FAQ answer and final contact section

## 🔧 How to Replace

### Option 1: Quick Search & Replace
Use your IDE's find & replace feature (Cmd/Ctrl + F):

1. Search for: `<Placeholder>[X]</Placeholder>`
2. Replace with: `12` (or your actual value)
3. Repeat for each placeholder type

### Option 2: Manual Editing
1. Open `src/components/LandingPage.jsx`
2. Look for the bright yellow highlighted sections
3. Replace the entire `<Placeholder>...</Placeholder>` component with plain text

**Before:**
```jsx
<p>Neste kurs: <Placeholder>[Dato]</Placeholder></p>
```

**After:**
```jsx
<p>Neste kurs: 15. januar 2024, kl. 09:00-15:00</p>
```

## 🎯 Registration Button

The "Meld deg på kurset" button currently shows an alert. To make it functional:

**Find this function in `LandingPage.jsx`:**
```jsx
const handleCTAClick = () => {
  // Placeholder for form/registration logic
  alert('Påmeldingsfunksjonalitet kommer her!');
};
```

**Replace with your registration logic:**
```jsx
const handleCTAClick = () => {
  // Option 1: Open external form
  window.open('https://forms.your-domain.com/ai-course', '_blank');
  
  // Option 2: Navigate to registration page
  window.location.href = '/registration';
  
  // Option 3: Open modal (you'll need to implement the modal)
  setShowModal(true);
};
```

## ✅ Checklist

Before deploying to production, verify:

- [ ] All `[X]` replaced with actual spots remaining
- [ ] All `[Dato]` replaced with actual date and time
- [ ] `[TBD]` replaced with actual venue
- [ ] `[Fyll inn]` replaced with actual price
- [ ] `[navn]` replaced with contact person name
- [ ] `[epost]` replaced with contact email
- [ ] `[telefon]` replaced with contact phone
- [ ] Registration button works correctly
- [ ] No yellow highlighted placeholders visible on the page

## 🔍 Testing

After replacing placeholders:

1. Run `npm start` to see changes locally
2. Check that no yellow highlights remain
3. Test the registration button
4. Verify all information is correct
5. Build and deploy: `npm run build`

## 💡 Tips

- **Keep formatting consistent:** Use Norwegian date format (15. januar 2024)
- **Phone numbers:** Use Norwegian format (+47 123 45 678)
- **Email:** Use professional email domain
- **Spots remaining:** Update regularly to create urgency
- **Consider:** Adding actual registration numbers dynamically if you have a backend

