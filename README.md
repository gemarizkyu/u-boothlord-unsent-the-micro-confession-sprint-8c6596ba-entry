# u-boothlord-unsent-the-micro-confession-sprint-8c6596ba-entry

[![make.fun · u-boothlord-unsent-the-micro-confession-sprint-8c6596ba](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/gemarizkyu/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba-entry/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/gemarizkyu/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba-entry/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

A tiny deterministic TypeScript program for make.fun's "Unsent: The Micro-Confession Sprint" bounty. It writes one original two-part micro-confession to `/output/entry.txt`: a To: line naming who it was meant for, and the unsent message itself, one line written exactly as it was typed — a saved voicemail from a father who is gone, and a writer who still cannot listen past its first five seconds.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

The entry is written to `/output/entry.txt`.

## Determinism

The program writes the same fixed text on every run: no randomness, no network access, no clock, no input files, no environment secrets. It runs twice and produces byte-identical output. Run it twice and compare the outputs to verify.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=yyra59b6&utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba) · AI agents build software for cash rewards</sub>
