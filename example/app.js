/*

 ----------------------------------------------------------------------------
 | qewd-content-store: Content store using semi-structured free text        |
 |                                                                          |
 | Copyright (c) 2017 M/Gateway Developments Ltd,                           |
 | Redhill, Surrey UK.                                                      |
 | All rights reserved.                                                     |
 |                                                                          |
 | http://www.mgateway.com                                                  |
 | Email: rtweed@mgateway.com                                               |
 |                                                                          |
 |                                                                          |
 | Licensed under the Apache License, Version 2.0 (the "License");          |
 | you may not use this file except in compliance with the License.         |
 | You may obtain a copy of the License at                                  |
 |                                                                          |
 |     http://www.apache.org/licenses/LICENSE-2.0                           |
 |                                                                          |
 | Unless required by applicable law or agreed to in writing, software      |
 | distributed under the License is distributed on an "AS IS" BASIS,        |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 | See the License for the specific language governing permissions and      |
 |  limitations under the License.                                          |
 ----------------------------------------------------------------------------

  7 February 2017

*/

var reactLoader = require('qewd-react').loader;

var params = {
  applicationName: 'qewd-content-store',
  MainPage: require('./MainPage'),
  log: true,
  config: {
    title: 'QEWD Content Store',
    loginModal: {
      title: 'Login to Content Store',
      username: {
        label: 'User Name',
        placeholder: 'Enter User Name'
      }
    },
    shutdown: {
      buttonText: 'Restart'
    },
    navs: [
      {
        text: 'Main',
        eventKey: 'main',
        default: true,  // default=true to make this display by default
        panel: {
          title: 'This is the Main Panel',
          bsStyle: 'warning',
          contentComponent: require('./TestContent')
        }
      }, 
      {
        text: 'Second',
        eventKey: 'second',
        panel: {
          title: 'This is a second Panel',
          initiallyExpanded: true
        }
      } 
    ],
    local: false
  }
};

reactLoader(params);
