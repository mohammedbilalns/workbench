# Htmx
Client side framwework, where we can directly annotate how we would like to interact with the servers
Example:
```
  <script src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.8/dist/htmx.min.js"></script>
  <!-- have a button POST a click via AJAX -->
  <button hx-post="/clicked" hx-swap="outerHTML">
    Click Me
  </button>
```

the hx-post and hx-swap tells the htmx to replace the entire button with html response 
