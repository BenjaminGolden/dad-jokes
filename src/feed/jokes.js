export const Jokes = (jokeObject) => {
    return `
      <section class="joke">
        <header>
            <h2 class="joke__title">${jokeObject.url}</h2>
        </header>
      </section>
    `
  }