import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Accountitem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://s.net.vn/LdeS"
                alt="avt"
            />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>hoaa.hanassii</span>
                    <FontAwesomeIcon
                        className={cx('checkIcon')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>Đào Lê Phương Hoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
