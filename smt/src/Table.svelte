<script>
    export let title
  export let head;
  export let body;
</script>

<style>
    section{
        margin-top: 2em;
        margin-bottom: 3em;
    }
</style>

<section>
    <h2>{title}</h2>
    <table class="table table-hover">
      <thead>
        <tr>
          {#each head as header}
            <th>{header}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each body as row}
          <tr>
            {#each Object.values(row) as val}
              <td>{val}</td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
</section>
