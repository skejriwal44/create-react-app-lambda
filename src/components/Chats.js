import React, { useRef, useState, useEffect } from "react"


import axios from 'axios'
import { useHistory } from "react-router-dom"
import { 
  ChatEngine as ChatEngine1, getOrCreateChat
} from 'react-chat-engine'

import { 
  ChatEngine as ChatEngine2
} from 'react-chat-engine'

import { useAuth } from "../contexts/AuthContext"

import { auth } from "../firebase"


export default function Chats() {
  const didMountRef = useRef(false)
  const [ loading, setLoading ] = useState(true)
  const { user } = useAuth()
  const history = useHistory()



  async function handleLogout() {
    await auth.signOut()
    history.push("/")
  }

  async function getFile(url) {
    console.log("https://cors-anywhere.herokuapp.com/"+url);
    url = "https://cors-anywhere.herokuapp.com/"+url;
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: 'image/jpeg' });
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true

      if (!user || user === null) {
        history.push("/")
        return
      }
      // Get-or-Create should be in a Firebase Function
      axios.get(
        'https://api.chatengine.io/users/me/',
        { headers: { 
          "project-id": '3d7fabcc-f5f4-4bfe-ae0a-34cd71c9b916',
          "user-name": user.email,
          "user-secret": user.uid
        }}
      )

      .then(() => setLoading(false))

      .catch(e => {
        let formdata = new FormData()
        formdata.append('email', user.email)
        formdata.append('username', user.email)
        formdata.append('secret', user.uid)

        getFile(user.photoURL)
        .then(avatar => {
          console.log(avatar)
          // formdata.append('avatar', avatar, avatar.name)
        

          axios.post(
            'https://api.chatengine.io/users/',
            formdata,
            { headers: { "private-key": "015c9875-80f1-4d12-91a1-66388f883692" }}
          )
          .then(() => {setLoading(false);
          })
          .catch(e => console.log('e', e.response))
        })
      })

      axios.get(
        'https://api.chatengine.io/users/me/',
        { headers: { 
          "project-id": '6d68dbc1-8843-403d-a512-781c5d48182e',
          "user-name": user.email,
          "user-secret": user.uid
        }}
      )
      .then(() => setLoading(false))
      .catch(e => {
        console.log(e)
        let formdata = new FormData()
        formdata.append('email', user.email)
        formdata.append('username', user.email)
        formdata.append('secret', user.uid)

        getFile(user.photoURL)
        .then(avatar => {
          // formdata.append('avatar', avatar, avatar.name)
        
          console.log(user)
          axios.post(
            'https://api.chatengine.io/users/',
            formdata,
            { headers: { "private-key": "02d6777d-c38c-4581-bcbd-8055edcdb2e4" }}
          )
          .then(() => {setLoading(false);
            })
          .catch(e => console.log('e', e.response))
        })
      })
      
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    }
  }, [user, history])


  useEffect(() => {

      if (!user || user === null) {
        history.push("/")
        return
      }
    let payload =  {"username": user.email}
    axios.post(
      'https://api.chatengine.io/chats/135591/people/',
      payload,
      {headers : {
        'Project-ID': '3d7fabcc-f5f4-4bfe-ae0a-34cd71c9b916',
        'User-Name': 'asasdd',
        'User-Secret': 'aa'
      }}

    )
    .then(res => {})
    
  }, [user, history])

  useEffect(() => {
    if (!user || user === null) {
      console.log("Here_null")
      history.push("/")
      return
    }
  let payload = { "usernames": ["Live_Offers"],"title": "Live Offers" ,"is_direct_chat": true};
  axios.put(
    'https://api.chatengine.io/chats/',
    payload,
    {headers : {
      'Project-ID': '6d68dbc1-8843-403d-a512-781c5d48182e',
      'User-Name': user.email,
      'User-Secret': user.uid
    }}
  )
  .then(res => { 
    })

  
}, [user, history])

  if (!user || loading) return <div />

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>
          Livestream
        </div>

        <div onClick={handleLogout} className='logout-tab'>
          Logout
        </div>
      </div>
      <ChatEngine2
        height='calc(99vh - 66px)'
        projectID='3d7fabcc-f5f4-4bfe-ae0a-34cd71c9b916'
        userName={user.email}
        userSecret={user.uid}
        renderChatList={
          
          (chatAppState) => {return (<iframe  id="ytplayer" width="100%" height="73.75%" src="https://www.youtube.com/embed/-zk7FTN9dC0?autoplay=1&amp;rel=0&amp;modestbranding=1;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)}
        }
        renderChatSettings={() => {return (null);}}
        offset={6}
      />

      <ChatEngine1
        height='calc(99vh - 66px)'
        projectID='6d68dbc1-8843-403d-a512-781c5d48182e'
        userName={user.email}
        userSecret={user.uid}
        renderChatList={(chatAppState) => {return (null);}}
        renderChatSettings={() => {return (null);}}
        offset={6}
      />
      </div>

      
  )

}
