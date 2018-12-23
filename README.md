# react-has-mounted

High Ordered Component which detect componentDidMount() call.

Examples:

```jsx
import React from 'react';
import { hasMounted } from 'react-has-mounted';

const UserLocationInfo = ({ hasMounted }) => (
    <p>
        { !hasMounted && 'Loading...' }
        { hasMounted && `Your location: ${window.location.href}` }
    </p>
)

export default hasMounted()(UserLocationInfo);

```

React-redux and other hocs:

```jsx
import react from 'react';
import { connect } from 'react-redux';
import performance from 'arui-feather/performance';
import { hasMounted } from 'react-has-mounted';
import UserName from './UserName';

const mapStateToProps = state => ({ name: state.user.name });

export default performance(hasMounted(connect(mapStateToProps)))(UserName);
```

more clear with [compose](https://medium.com/dailyjs/react-composing-higher-order-components-hocs-3a5288e78f55):

```jsx
import react from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import performance from 'arui-feather/performance';
import { hasMounted } from 'react-has-mounted';
import UserName from './UserName';

const mapStateToProps = state => ({ name: state.user.name });

export default compose(
    performance,
    hasMounted,
    connect(mapStateToProps)
)(UserName);
```
