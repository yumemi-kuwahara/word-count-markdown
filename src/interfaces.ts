export interface ILine {
  length: number
  text: string
  stripedText: string
}

export interface ISection {
  name: string
  header: string
  floor: number
  length: number
}

export interface ICountCharacters {
  lines: any[]
  sections: ISection[]
}
