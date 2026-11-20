# ziko-gold-trading-data

Public data feed for the **Ziko Gold Trading** mobile app.

- `signals.json` — latest gold (XAUUSD) and silver (XAGUSD) scalping signals
  (H1 + 30M + 15M, closed candles only), spot prices, and today's key news.
  Updated every 15 minutes by the same system that posts to the Telegram
  channel https://t.me/zikogoldtrading
- Spot prices inside this file are a snapshot; the app fetches live spot
  prices directly from gold-api.com in the browser.
- Educational analysis only — not financial advice.
