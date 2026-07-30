**English** | [日本語](README_ja.md)

## Don't Buy

### App Concept

When there's something you want to buy, saving up the money isn't the only thing standing in your way. There's also a psychological hurdle to actually going through with the purchase.
You save up the money, but then you hesitate: is it really okay to buy it? Guilt and a nagging sense of "what a waste" get in the way of reaching the thing you wanted.
You've resisted plenty of small purchases before — snacks, little impulse buys — but once the price tag gets bigger, you freeze up and can't pull the trigger.
And some people struggle to save at all: they buy whatever catches their eye, and before they know it, they're broke.

This app is built to solve that.
Every time you resist buying something you were planning to buy, you record it in the app — and the amount you resisted, along with a history of that restraint, accumulates. Of course, the money you didn't spend piles up in real life too.
The money you would have lost in the real world builds up instead. Conventional wisdom says the key to saving is setting money aside from your income first — this app flips that approach.
The act of *not* buying is what makes the money accumulate. And along with it, a sense of "I held back" accumulates too.

Once your savings reach the goal, you can look back through the app and see a history of everything you saved on and everything you resisted buying.
That lowers the psychological hurdle the next time you want to buy something *and* builds up money at the same time — a two-birds-one-stone effect.
This app aims to be a savings app built around frugality and restraint.

### Planned Features (rough sketch)

- UI and registration flow for instantly converting a purchase you were about to make into a "saved" entry
- Statistics UI for looking back over your savings history
- Motivational displays like "You saved ¥XX,XXX this month!" or "Your actions today/this week/this month got you X% closer to your goal!"
- Registering multiple goal items at once (unlimited, free)
- Login functionality
- A guest login user for portfolio purposes (may be a bit off the main track)
- Anything else that comes up...
- "BUY" mode shows a list of items you want to buy along with how full each item's savings gauge is; "Don't Buy" mode shows your savings history and the entry screen. The two modes switch with a single button and each has its own theme.

For the more detailed feature design, data model, and technology choices, see [docs/plan.md](docs/plan.md) (Japanese).

### Tech Stack

| Layer    | Stack         | Language   |
| -------- | ------------- | ---------- |
| Frontend | Next.js/React | TypeScript |
| Backend  | Next.js       | TypeScript |
| DB       | Supabase      | PostgreSQL |
