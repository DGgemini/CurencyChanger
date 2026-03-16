# Currency Changer App - Implementation Plan

## Overview
A React Native (Expo) mobile app where users can add currency conversion cards. Each card converts from one currency to another. Rates are fetched from the internet when online and cached in SQLite for offline use.

## Architecture

### Data Flow
1. User adds a card by selecting "from" and "to" currencies
2. App checks internet connectivity
3. **Online**: Fetch live rate from free API (`exchangerate-api.com`), save to SQLite
4. **Offline**: Load last cached rate from SQLite
5. User enters an amount and sees the converted result in real time

### API
- **Free API**: `https://open.er-api.com/v6/latest/{BASE}` (no API key needed, 1500 req/month)
- Returns all rates for a given base currency

---

## Steps

### Step 1: Install Dependencies
```bash
npx expo install expo-sqlite @react-native-community/netinfo
```
- `expo-sqlite` - SQLite database for offline caching
- `@react-native-community/netinfo` - detect online/offline status

### Step 2: Create Database Layer (`services/database.ts`)
- Initialize SQLite database with two tables:
  - `cards`: id, fromCurrency, toCurrency, position (order)
  - `rates`: id, fromCurrency, toCurrency, rate, updatedAt
- Functions: `initDB()`, `getCards()`, `addCard()`, `deleteCard()`, `getCachedRate()`, `saveRate()`

### Step 3: Create API Service (`services/api.ts`)
- `fetchRate(from, to)` - fetch live exchange rate
- `isOnline()` - check network connectivity using NetInfo
- `getRate(from, to)` - smart function: try online first, fall back to cached

### Step 4: Create App State Context (`context/AppContext.tsx`)
- React Context to manage:
  - List of conversion cards
  - Loading states
  - Add/delete card functions
- Wraps the app and provides state to all components

### Step 5: Build "Add Card" Modal (`components/AddCardModal.tsx`)
- Modal triggered by the "+" button
- Two searchable/scrollable currency pickers (from & to)
- Uses existing `currencies` array from `currencys.ts`
- "Add" button to confirm

### Step 6: Update Cards Component (`components/Cards.tsx`)
- Display: from currency flag/code, to currency flag/code, exchange rate
- Text input for amount to convert
- Show converted result
- Swipe-to-delete or delete button
- Show "offline" indicator when using cached rate
- Show last updated timestamp

### Step 7: Update Body Component (`app/Body.tsx`)
- Replace hardcoded 5 cards with dynamic list from context
- Use `FlatList` for scrollable card list
- Show empty state when no cards added

### Step 8: Wire Up TopBar + AddButton
- `AddButton` opens the Add Card modal
- Pass modal visibility state through context or props

### Step 9: Initialize DB on App Start (`app/_layout.tsx`)
- Call `initDB()` on app mount
- Wrap app in `AppContext` provider

---

## File Structure (new/modified)
```
components/
  Cards.tsx          (modify - add currency display & conversion)
  addButton.tsx      (modify - trigger modal)
  AddCardModal.tsx   (new - currency selector modal)
  currencys.ts       (keep as-is)
services/
  database.ts        (new - SQLite operations)
  api.ts             (new - exchange rate API + offline logic)
context/
  AppContext.tsx      (new - app state management)
app/
  _layout.tsx        (modify - init DB, wrap in context)
  index.tsx          (keep as-is)
  Body.tsx           (modify - dynamic card list)
  topBar.tsx         (modify - connect add button to modal)
```
