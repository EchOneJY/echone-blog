// posts.data.js
import { Frontmatter } from '@/types'
import { createContentLoader } from 'vitepress'

export interface Data {
    url: string
    frontmatter: Frontmatter
}

declare const data: Data[]
export { data }

export default createContentLoader<Data[]>('posts/*.md')