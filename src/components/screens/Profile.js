import React from 'react';

const Profile = () => {
    return (
        <div style={{maxWidth:'550px',margin:'0px auto'}}>
            <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin:"18px 0px",
                    borderBottom: "1px solid grey"
                }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                    src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1600'
                    alt='test'
                    />
                </div>
                <div>
                    <h4>Christian Salenga</h4>
                    <div style={{display:'flex', justifyContent: 'space-between', width:'108%'}}>
                        <h6> 40 posts </h6>
                        <h6> 40 followers </h6>
                        <h6> 40 following </h6>
                    </div>
                </div>
            </div>
            <div className='gallery'>
                <img className='item' src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='test' />
                <img className='item' src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='test' />
                <img className='item' src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='test' />
                <img className='item' src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='test' />
                <img className='item' src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='test' />
                <img className='item' src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='test' />
                <img className='item' src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='test' />
                <img className='item' src='https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='test' />
            </div>
        </div>
    )
}

export default Profile