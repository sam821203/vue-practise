import SongItem from '@/components/SongItem.vue'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'

describe('SongItem.vue', () => {
  test('renders song.display_name', () => {
    const song = {
      display_name: 'null',
    }

    const wrapper = shallowMount(SongItem, {
      props: {
        song,
      },
      global: {
        components: {
          'router-link': RouterLinkStub,
        }
      }
    })

    const compositionAuthor = wrapper.find('.text-gray-500')

    expect(compositionAuthor.text()).toContain(song.display_name)
  })

  test('renders song.docID in id attribute', () => {
    const song = {
      docID: 'abc',
    }

    const wrapper = shallowMount(SongItem, {
      props: {
        song,
      },
      global: {
        components: {
          'router-link': RouterLinkStub,
        }
      }
    })

    // expect(wrapper.attributes().id).toBe(`song-id-${song.docID}`)
    expect(wrapper.classes()).toContain(`song-id-${song.docID}`)
  })
})