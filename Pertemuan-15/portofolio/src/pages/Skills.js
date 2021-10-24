import React from "react"

function Skills () {
  return (
      <>
        <h1>Skills</h1>
        <div >
          <h3 style={{color: 'darkRed'}}>Web Development</h3>
          <hr/>
            <p>Experienced in using:</p>
            <div style={{display: 'flex'}}>
              <ul style={{flex: '1'}}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <ul style={{flex: '1'}}>
                <li>React JS</li>
                <li>Next JS</li>
                <li>Redux</li>
              </ul>
              <ul style={{flex: '1'}}>
                <li>Styled Components</li>
                <li>Material UI</li>
                <li>SCSS</li>
              </ul>
              
            </div>
          <h3 style={{color: 'darkRed'}}>Mobile Development</h3>
          <hr/>
          <div>
            <p>Experienced in using:</p>
            <ul>
              <li>React Native</li>
              <li>Nativebase</li>
              <li>Flutter</li>
              <li>Kotlin</li>
            </ul>
          </div>
          <h3 style={{color: 'darkRed'}}>Other Technology</h3>
          <hr/>
          <div>
            <p>Experienced in using:</p>
            <ul>
              <li>Figma</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </>
  )
}

export default Skills
