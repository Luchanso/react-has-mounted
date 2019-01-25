# react-has-mounted

[![Coverage Status](https://coveralls.io/repos/github/Luchanso/react-has-mounted/badge.svg?branch=master)](https://coveralls.io/github/Luchanso/react-has-mounted?branch=master)

High Order Component which detect componentDidMount() call.

Examples:

```jsx
import React from 'react';
import { withCheckMount } from 'react-has-mounted';

const UserLocationInfo = ({ hasMounted }) => (
    <p>
        { !hasMounted && 'Loading...' }
        { hasMounted && `Your location: ${window.location.href}` }
    </p>
)

export default withCheckMount()(UserLocationInfo);

```

React-redux and other hocs:

```jsx
import react from 'react';
import { connect } from 'react-redux';
import performance from 'arui-feather/performance';
import { withCheckMount } from 'react-has-mounted';
import UserName from './UserName';

const mapStateToProps = state => ({ name: state.user.name });

export default performance(withCheckMount(connect(mapStateToProps)))(UserName);
```

more clear with [compose](https://medium.com/dailyjs/react-composing-higher-order-components-hocs-3a5288e78f55):

```jsx
import react from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import performance from 'arui-feather/performance';
import { withCheckMount } from 'react-has-mounted';
import UserName from './UserName';

const mapStateToProps = state => ({ name: state.user.name });

export default compose(
    performance,
    withCheckMount,
    connect(mapStateToProps)
)(UserName);
```
