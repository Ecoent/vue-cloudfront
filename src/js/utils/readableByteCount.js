import {binaryPrefix} from '../../../config/config';
import store          from '../../vue/store/index';

/**
 * Convert a byte size to an human readable size.
 * e.g. 123456 => '123.46 kB'
 * @param bytes
 * @param mapValue Optional mapper to manipulate the raw number
 * @returns {string}
 */
export default (bytes, mapValue = v => v) => {
    const si = (store.state && store.state.settings) ? store.state.settings.user.siPrefix : binaryPrefix;
    const unit = si ? 1000 : 1024;
    const block = bytes / unit;

    if (block < 1) {
        return `${bytes} B`;
    }

    for (let i = 1; i <= 6; i++) {
        if (block < (unit ** i)) {
            const size = Number((block / (unit ** (i - 1))).toFixed(2));
            const desc = `${(si ? 'kMGTPEB' : 'kMGTPEiB').charAt(i - 1)}${si ? '' : 'i'}B`;
            return mapValue(size) + desc;
        }
    }

    return `${bytes} B`;
}
