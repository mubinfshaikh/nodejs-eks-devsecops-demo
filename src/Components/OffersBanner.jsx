import React from 'react'
import './CartoonBanner.css'
import banner2 from'../Photos/Banner2.png'
import banner1 from'../Photos/Banner1.png'
import banner3 from'../Photos/Banner3.png'
import banner4 from'../Photos/Banner4.png'


function OffersBanner() {
    return (
        <div className=' d-flex justify-content-center align-items-center mt-5 flex-column'>
            <div className='w-75 '>
                <h4 className='fw-bolder'>hello welcome to this cartoon app what's up?</h4>
                <div id='banner-img' className='d-flex align-items-center ' style={{overflowY:"scroll",gap:"20px"}}>
                    <img width={'450px'} src={banner2} alt="Cartoon" />
                    <img width={'450px'} src={banner1} alt="Cartoon" />
                    <img width={'450px'} src={banner3} alt="Cartoon" />
                    <img width={'450px'} src={banner4} alt="Cartoon" />
                </div>
            </div>

            <div className='w-75 mt-5'>
                
                <h4 className='fw-bolder'>What's on your mind Today?</h4>
                <div className='d-flex align-items-center' style={{overflowY:"scroll",gap:"19px"}}>
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CDMvTqN6SgczgQkN2GfOq0NxsYuaXtqKs8f7VCkWwWWXfrNOGhbKkfvRyhdYlCDkgpw&usqp=CAU" alt="Potato" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9TitrUGDRcT77ii_3hzuu3lQIgiocdrK7pQ&usqp=CAU" alt="tomato" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZudgpcC6PjoKPzaGievUmqpsW8u7nWeQ0g&usqp=CAU" alt="santa" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYnl3lUFgVLTM-wKQvXLtZ61EB4T_bNIklg&usqp=CAU" alt="broccoli" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjxL8h3doeaf12lfvZq9AaX6SqD4twKh0oeZoucWaZkU6EH_8yiPXHoTXy5DtsCZcM3Q&usqp=CAU" alt="Apple" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSFKLMR9kBnddqZ3u_I0ZdK7m5nQrzHmOmQ&usqp=CAU" alt="banana" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMdaZsU8I5INylFO4E17rEPFczdVtXuEs6Q&usqp=CAU" alt="cat" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4IYpTDS34Ljff5fRZR6k7mmyWuFTNQ1ncw&usqp=CAU" alt="crocodile" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADSNfulLK5wFOi2XOOgJTNhO2tKR1qSxNyA&usqp=CAU" alt="Grasshopper" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuteYEBXVdDaLczCpTZ7ma__4wSiixgP69gQ&usqp=CAU" alt="Panda" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGfPpqR01jwpw-XLKWlRJEAunvvxX0VaT9w&usqp=CAU" alt="Giraffe" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_iju7iNUWKe1t8vnoDcPy-rixtMosAtF2g&usqp=CAU" alt="Turtle" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcvBlu6a0SiLXXjpfUIcABGJdo5uzm_RGrw&usqp=CAU" alt="eggplant" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsehjw5mhLiqIfJxyb82NJqQWmRQgHGvWsQw&usqp=CAU" alt="Tropical fruit" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXe3xM0vILE3O3LzLMTkon7lWiffqn4CB2w&usqp=CAU" alt="Dog" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZ3J1TOr_vBCx3IeuQXDOtVBuBvNspBpV8Q&usqp=CAU" alt="Hippo" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ZvCKbKGtuAR67ffKMXRLRIwyFS2SelKlbw&usqp=CAU" alt="Brown Porcupine" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7dCZQNhZGSUkvIuH_c-KdkL7YGix_nTh2UA&usqp=CAU" alt="Crazy Chicken" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeS-g0sTO2aqqGyiob57I0231tpyLBhyePeg&usqp=CAU" alt="Football" />
                    <img className='img-fluid' width={'140px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzJ-2xUIpI6V3DszsuZgNHHUqFd8JbSWiZQ&usqp=CAU" alt="Penguin" />

                   
                    
                </div>
                <hr />
            </div>
        </div>
    )
}

export default OffersBanner
