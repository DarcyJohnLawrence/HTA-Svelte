<script lang="ts">
  window.moveTo(-7, 0);
  window.resizeTo(screen.availWidth, screen.availHeight);

  let clicked = 0;
</script>

<main>
  <h1>HTA SVELTE</h1>

  <p>Button clicked {clicked} times.</p>

  <button
    on:click={() => {
      clicked++;
    }}>Click Me!</button
  >
</main>

<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 8em;
    color: white;
  }

  h1 {
    font-size: 4em;
  }

  p {
    font-size: 2em;
  }

  button {
    border: none;
    border-radius: 8px;
    background-color: #6056e0;
    color: white;
    padding: 1rem;
    font-size: 1.5em;
    transition: background-color 0.08s linear;
  }

  button:hover {
    background-color: #864cc9;
  }
</style>
