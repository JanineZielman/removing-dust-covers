import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ListSlice} ListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ListSlice>} ListProps
 * @param { ListProps }
 */
const List = ({ slice }) => {
  console.log(slice)
  return(
    <section className='list'>
      {slice.items.map((item, i) => {
        return(
          <div className='list-item'>
            <div>
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
            {item.lang.map((txt,j) => {
              return(
                <span>{txt.text}</span>
              )
            })}
          </div>
        )
      })}
    </section>
  )
}

export default List