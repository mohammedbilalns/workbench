<script>
    let open = false;
</script>

<button class="btn">
    <span>Item A </span>
    <span class="trigger {open ? 'open' : ''}">some text</span>
</button>

<style>
    .trigger {
        display: inline-block;
        transition: rotate 0.2s ease;

        &.open {
            rotate: -90deg;
        }
    }
</style>
