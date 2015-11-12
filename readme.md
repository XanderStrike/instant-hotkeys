# instant hotkeys

_Precooked and dehydrated for your enjoyment._

Instant hotkeys automatically binds keys in any webpage using only css classes. Check it, yo.

Click a link or button with A:

    <a href='#' class='hk-a'>Click me!</a>

Focus in on a field with Shift+F:

    <input href='#' class='hk-shift-f' placeholder='Search!'>

Other basic actions are coming!

Don't forget to include the requirements:

    <script src='jquery.js'></script>
    <script src='jquery.hotkeys.js'></script>
    <script src='instant-hotkeys.js'></script>

Run this bad boy:

    <script>
      $(document).ready(function() {
        instantHotkeys();
      });
    </script>

Pow.


