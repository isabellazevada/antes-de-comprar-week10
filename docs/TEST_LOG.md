# Mechanical pass · 18/10/2026

Version 1: 1cc4931. Deployed successfully at the Site URL.

Seven model tests passed: total with shipping, unknown shipping, exact budget, decimal cents, invalid amounts, purpose length and zero shipping.

## Observed bug and correction
Navigation regression executed against actual app event handlers in a lightweight Node DOM harness (not a real browser): edit price from 950 to 1050, click the brand to return home, start again. Expected 1050; observed 950. The brand handler changed screen before capturing form edits.

Fix: capture the current offer or priorities form before returning home through the brand. Repeated regression: passes. Full suite: 8/8 passing. Version 2 includes this correction.

## Verification limits
No browser-control skill available in this environment, so visual and real-browser interaction checks remain pending. The harness is not a browser. Persona test has not yet been performed. LLM and vision are simulated and labeled, and do not meet the real Dragon Stack requirement. No API credentials configured.

## Next checks by the user
Use the URL at mobile width. Walk start → offer → priorities → result → edit → finish. Test unknown shipping and return-home navigation. Take screenshots for the fresh-chat persona test and report actual confusions.
