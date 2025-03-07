# Ricersheet

Modular CSS Terminal-like UI library

# WARNING: THIS IS A WORK IN PROGRESS AND IS NOT READY FOR USE

If you want to try out the dev version, you can:
1. Clone the repo
2. cd into the repo
3. Run `bun i`
4. Run `bun run bundle`
5. Run `bun run dev` to start the dev server

For feature requests please open an issue.

Thanks.

## TODO

- each component has its own css variables for modular control
- components (separate modules)
  - <button>
      - checkbox
      - radio
  - <input>
      - input[type="checkbox"] 
      - input[type="radio"]
      - input[type="range"]
      - switch
  - <textarea>
  - <label>
  - <table>
  - <dialog>
      - popover (backdrop? + pointer events)
      - drawer / sheet
  - <select>
  - <details>
  - typography
  - tooltip (hover)
  - misc
    - badge (div[is-="badge"])
    - avatar (img[is-="avatar"])
    - card (div[is-="card"])
    - surface (div[is-="surface"], auto-surfacing utils)
    - skeleton (div[is-="skeleton])
- index.css (everything)
