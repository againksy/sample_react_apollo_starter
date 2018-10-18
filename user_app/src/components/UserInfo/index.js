import React, { Component, } from 'react'
import UserCity from './UserCity'

class UserInfo extends Component {
  constructor(props){
    super(props)
    this.state = {
      showEditCity: false,
    }
  }
  showEdit = () => this.setState({ showEditCity: !this.state.showEditCity })
  render() {
    let { showEditCity } = this.state;
    let { user, fullinfo, } = this.props

    let UserWrapClass = "user_image_wrap";
    let programming_language_name = "pl_name"
    let comma = ""
    let skillClass = "u_skill"
    let wrapClass = "user_info";
    if(!fullinfo){
      UserWrapClass = UserWrapClass + " user_open"
      programming_language_name = null
      comma = ","
      skillClass = skillClass + " u_skill-full"
      wrapClass = wrapClass + " user_info_zoom"
    }

    return <div className={wrapClass} key={user.id}>
              <div className={UserWrapClass}>
                <img alt="" className="user_image" src="/image.png"></img>
              </div>
              <div className="user_name">{user.name}</div>
              <div className="user_age">{user.age} years</div>
              <UserCity fullinfo={fullinfo} showEdit={this.showEdit} user={user} edit={showEditCity || (!user.city && !showEditCity)} />
              {fullinfo && <span className="edit_city-btn" onClick={this.showEdit}>&#9985;</span>}
              <div className="user_skills">{
                user.knowledge.map(( skill,i ) => <span className={skillClass} key={i}>
                    <span className="programming_language">
                      <span className={programming_language_name}>{skill.language+comma}</span>
                      {fullinfo && <span className="pl_frameworks">
                          {
                            skill.frameworks.length > 0 && skill.frameworks.map((f,i) => {
                              let last = skill.frameworks.length === i + 1
                              return <span key={i}>{f + (last ? "" : ", ")}</span>
                            })
                          }
                        </span>}
                    </span>
                  </span>
                )
              }</div>
            </div>
  }
}

export default UserInfo
