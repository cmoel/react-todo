import { camelizeKeys } from "humps"

export function get(key) {
  try {
    return camelizeKeys(JSON.parse(localStorage.getItem(key)))
  } catch(e) {
    return null
  }
}

export function set(key, value) {
  localStorage.setItem(key, JSON.stringify(camelizeKeys(value)))
}

export function remove(key) {
  localStorage.removeItem(key)
}
