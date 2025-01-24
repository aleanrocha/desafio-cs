import { v4 } from 'uuid'

export default class Generate {
  static Id(): string {
    return v4()
  }
}
