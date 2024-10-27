import { createEvent, createStore, sample } from "effector";
import { Author } from "../../types";

const BIRTH: Pick<Author, 'birthDate' | 'birthMonth' | 'birthYear'>= {
  birthDate: 14,
  birthMonth: 4,
  birthYear: 1994
}

const AUTHORS: Author[] = [
  { name: 'Lev', surname: 'Tolstoy', image: require('@/assets/images/authors/tolstoy.png'), ...BIRTH },
  { name: 'George', surname: 'Orwell', image: require('@/assets/images/authors/orwell.png'), ...BIRTH },
  { name: 'Jules', surname: 'Verne', image: require('@/assets/images/authors/verne.png'), ...BIRTH },
  { name: 'Thomas', surname: 'Aquinas', image: require('@/assets/images/authors/aquinas.png'), ...BIRTH },
  { name: 'Hannah', surname: 'Arendt', image: require('@/assets/images/authors/arendt.png'), ...BIRTH },
  { name: 'Aristotle', surname: '', image: require('@/assets/images/authors/aristotle.png'), ...BIRTH },
  { name: 'Mikhail', surname: 'Bulgakov', image: require('@/assets/images/authors/bulgakov.png'), ...BIRTH },
  { name: 'Anton', surname: 'Chekhov', image: require('@/assets/images/authors/chehov.png'), ...BIRTH },
  { name: 'Dante', surname: 'Alighieri', image: require('@/assets/images/authors/dante.png'), ...BIRTH },
  { name: 'René', surname: 'Descartes', image: require('@/assets/images/authors/dekart.png'), ...BIRTH },
  { name: 'Jacques', surname: 'Derrida', image: require('@/assets/images/authors/deridda.png'), ...BIRTH },
  { name: 'Fyodor', surname: 'Dostoevsky', image: require('@/assets/images/authors/dostoevsky.png'), ...BIRTH },
  { name: 'Sigmund', surname: 'Freud', image: require('@/assets/images/authors/freud.png'), ...BIRTH },
  { name: 'Michel', surname: 'Foucault', image: require('@/assets/images/authors/fuko.png'), ...BIRTH },
  { name: 'Georg', surname: 'Hegel', image: require('@/assets/images/authors/gegel.png'), ...BIRTH },
  { name: 'Hermann', surname: 'Hesse', image: require('@/assets/images/authors/gesse.png'), ...BIRTH },
  { name: 'Martin', surname: 'Heidegger', image: require('@/assets/images/authors/heidegger.png'), ...BIRTH },
  { name: 'Immanuel', surname: 'Kant', image: require('@/assets/images/authors/kant.png'), ...BIRTH },
  { name: 'Thomas', surname: 'Mann', image: require('@/assets/images/authors/mann.png'), ...BIRTH },
  { name: 'Karl', surname: 'Marx', image: require('@/assets/images/authors/marks.png'), ...BIRTH },
  { name: 'Friedrich', surname: 'Nietzsche', image: require('@/assets/images/authors/nietzsche.png'), ...BIRTH },
  { name: 'Plato', surname: '', image: require('@/assets/images/authors/platon.png'), ...BIRTH },
  { name: 'Plotinus', surname: '', image: require('@/assets/images/authors/plotin.png'), ...BIRTH },
  { name: 'Marcel', surname: 'Proust', image: require('@/assets/images/authors/prust.png'), ...BIRTH },
  { name: 'Alexander', surname: 'Pushkin', image: require('@/assets/images/authors/pushkin.png'), ...BIRTH },
  { name: 'Ayn', surname: 'Rand', image: require('@/assets/images/authors/rand.png'), ...BIRTH },
  { name: 'Arthur', surname: 'Schopenhauer', image: require('@/assets/images/authors/schopenhauer.png'), ...BIRTH },
  { name: 'Adam', surname: 'Smith', image: require('@/assets/images/authors/smit.png'), ...BIRTH },
  { name: 'Socrates', surname: '', image: require('@/assets/images/authors/sokrat.png'), ...BIRTH },
  { name: 'Susan', surname: 'Sontag', image: require('@/assets/images/authors/suntag.png'), ...BIRTH },
  { name: 'Kurt', surname: 'Vonnegut', image: require('@/assets/images/authors/vonnegut.png'), ...BIRTH },
];

const $authorsList = createStore<Author[]>(AUTHORS);

const setAuthor = createEvent<Author>();

sample({
  clock: setAuthor,
  source: $authorsList,
  fn: (authors, author) => [...authors, author],
  target: $authorsList
})

const outputs = {
  $authorsList
}

const inputs = {
  setAuthor
}

export const authorsModel = {
  outputs,
  inputs
}
