import { ListTrucks } from './ListTrucks';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from '../../actions/common.action';
import * as trucksActions from '../../actions/trucks.action';
import * as driversActions from '../../actions/drivers.action';

const mapStateToProps = (state: any) => {
    return {
        trucks: state.trucks,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            modal: bindActionCreators(commonActions, dispatch),
            trucks: bindActionCreators(trucksActions, dispatch),
            drivers: bindActionCreators(driversActions, dispatch),
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTrucks);