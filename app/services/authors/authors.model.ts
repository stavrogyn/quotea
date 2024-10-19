import { createStore } from "effector";
import { Authors } from "./authors.types";

const $authors = createStore<Authors>('')
