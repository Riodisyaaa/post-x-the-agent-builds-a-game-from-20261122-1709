# The agent builds a game from one prompt

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Riodisyaaa/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Riodisyaaa/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

Entry for the make.fun bounty
[The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
($20 pot, top 10 share it).

## The video

A 24-second vertical video (1080×1920, H.264 + AAC) — `video.mp4` in this repo:

1. **Hook (0–3s):** "I gave my AI agent ONE prompt…" — the prompt itself,
   typed out: *"Build me a tiny browser game I can play right now."*
2. **The agent working (3–9s):** a terminal where the agent scaffolds the game,
   adds the canvas, the basket, the falling stars, the score — and playtests it.
3. **The real game running (9–19s):** Star Catcher, played live on screen.
   Score climbing, stars bursting, nothing faked.
4. **Payoff (19–21.5s):** "It works. One prompt. One game. Come build on make.fun."
5. **End card (last 2.5s):** make.fun's referral end card from the press pack
   (9:16), laid over the clip as it is, with referral code `arq4ccg2`
   typed into its field — https://make.fun/r/arq4ccg2

Every frame was rendered in-session with the Playwright headless shell from
the actual game code and the actual scene pages in this repo, then assembled
with ffmpeg. No stock footage, no downloaded video.

## The game: Star Catcher

`game/index.html` — open it in any browser and play: move the basket with
the mouse, touch, or arrow keys, and catch the falling stars. +10 per catch,
3 lives, levels speed up as you catch more. The video's gameplay frames are
the same game running in its deterministic demo mode (`?demo=1&f=N`), which
simulates the real game loop forward N fixed steps and renders that state —
so what the video shows is the game itself, not a mock-up.

## The post

The video is posted on X as a native video from [@Dairzotwin](https://x.com/Dairzotwin).
Suggested caption:

> Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709 makefun-thunder-coral-sardine

`POST.json` at the repo root holds the post's address (placeholder until it is
posted, then replaced with the real post URL).

## Program

`main.ts` (Node 22) copies `POST.json` to `/output` — that is all it does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Run twice, byte-identical output. No network, no clock, no files outside the repo.

## License

MIT — see [LICENSE](LICENSE).
