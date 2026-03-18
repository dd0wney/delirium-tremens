<script lang="ts">
  import { base } from '$app/paths';
  
  interface Article {
    title: string;
    description: string;
    slug: string;
    date: string;
    readingTime: string;
    category: string;
    featured?: boolean;
  }
  
  export let articles: Article[];
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8">
  <div class="mx-auto max-w-2xl lg:max-w-none">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <!-- Featured Article (Large Card) -->
      {#if articles.find(a => a.featured)}
        {#each articles.filter(a => a.featured) as article}
          <div class="col-span-2 row-span-2 rounded-3xl bg-[var(--background)] p-8 ring-1 ring-[var(--primary)]/10 transition-all hover:ring-[var(--primary)]/20">
            <time datetime={article.date} class="text-sm text-[var(--text-muted)]">
              {new Date(article.date).toLocaleDateString()}
            </time>
            <h3 class="mt-4 text-2xl font-semibold text-[var(--primary)]">
              <a href="{base}/book/{article.slug}">
                {article.title}
              </a>
            </h3>
            <p class="mt-4 text-[var(--text)]">{article.description}</p>
            <div class="mt-4 flex items-center gap-3">
              <span class="text-sm text-[var(--text-muted)]">{article.readingTime}</span>
              <span class="text-sm text-[var(--text-muted)]">•</span>
              <span class="text-sm text-[var(--primary)]">{article.category}</span>
            </div>
          </div>
        {/each}
      {/if}

      <!-- Regular Articles -->
      {#each articles.filter(a => !a.featured) as article}
        <div class="rounded-2xl bg-[var(--background)] p-6 ring-1 ring-[var(--primary)]/10 transition-all hover:ring-[var(--primary)]/20">
          <time datetime={article.date} class="text-sm text-[var(--text-muted)]">
            {new Date(article.date).toLocaleDateString()}
          </time>
          <h3 class="mt-3 text-lg font-semibold text-[var(--primary)]">
            <a href="{base}/book/{article.slug}">
              {article.title}
            </a>
          </h3>
          <p class="mt-3 text-sm text-[var(--text)]">{article.description}</p>
          <div class="mt-4 flex items-center gap-3">
            <span class="text-sm text-[var(--text-muted)]">{article.readingTime}</span>
            <span class="text-sm text-[var(--text-muted)]">•</span>
            <span class="text-sm text-[var(--primary)]">{article.category}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div> 