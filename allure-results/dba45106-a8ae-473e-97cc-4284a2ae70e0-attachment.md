# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC003.spec.ts >> TC003
- Location: tests\TC003.spec.ts:2:1

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Invalid url: "chatgpt.com"
Call log:
  - navigating to "chatgpt.com", waiting until "load"

```

# Test source

```ts
  1 | import {test} from '@playwright/test';
  2 | test('TC003' , async({page})=> {
> 3 |     await page.goto("chatgpt.com");
    |                ^ Error: page.goto: Protocol error (Page.navigate): Invalid url: "chatgpt.com"
  4 |     console.log("ChatGpt opened");
  5 | }
  6 | );
```