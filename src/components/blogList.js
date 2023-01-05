import React from 'react'
import Card from './card'

const BlogList = ({ myblogs }) => {

    console.log(myblogs)

    return (
        <div className="mt-8 grid grid-cols-2  gap-8 mx-6 justify-center align-middle">
            <div className="col-span-1">
                {
                    myblogs.map((blogs) => <Card mytitle={blogs.title} type={"amazon"} mybody={blogs.body} key={blogs.title} />)
                }
            </div>
            <div className="col-span-1">
                {
                    myblogs.map((blogs) => <Card mytitle={blogs.title} type={"hepsiburada"} mybody={blogs.body} key={blogs.title} />)
                }
            </div>

        </div>
    )
}

export default BlogList