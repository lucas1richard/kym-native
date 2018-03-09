class StyleConverter {
  /**
   * Take a nested object specifying styles, and return an
   * object with only one level of nesting suitable for
   * use with react-native StyleSheet
   *
   * @example
   *
   * {
   *   wrapper: {
   *     primary: { backgroundColor: 'blue' },
   *     success: { backgroundColor: 'green' }
   *   },
   *   title: {
   *     primary: { color: 'blue' },
   *     success: { color: 'green' }
   *   }
   * }
   *
   * =>
   *
   * {
   *   wrapperprimary: { backgroundColor: 'blue' },
   *   wrappersuccess: { backgroundColor: 'green' },
   *   titleprimary: { color: 'blue' },
   *   titlesuccess: { color: 'green' },
   * }
   */
  static flatten = (nestedStyleObj) => {
    const keys = {};
    flattenSub(nestedStyleObj);
    return keys;

    function flattenSub(obj, prefix = '') {
      Object.keys(obj).forEach((key) => {
        if (containsObject(obj)) {
          flattenSub(obj[key], `${prefix}${key}`);
        } else {
          keys[`${prefix}`] = obj;
        }
      });
    }
  };

  /**
   * Create a map from the nested style object to
   * the flattened object key values
   *
   * @example
   *
   * {
   *   wrapper: {
   *     primary: { backgroundColor: 'blue' },
   *     success: { backgroundColor: 'green' }
   *   },
   *   title: {
   *     primary: { color: 'blue' },
   *     success: { color: 'green' }
   *   }
   * }
   *
   * =>
   *
   * {
   *   wrapper: {
   *     primary: 'wrapperprimary',
   *     success: 'wrappersuccess'
   *   },
   *   title: {
   *     primary: 'titleprimary',
   *     success: 'titlesuccess'
   *   }
   * }
   */
  static map = (nestedObj) => {
    const newObj = JSON.parse(JSON.stringify(nestedObj));
    return mapSub(newObj);

    function mapSub(obj, name = '', param, levelUp) {
      if (containsObject(obj)) {
        if (param) {
          levelUp[param] = Object // eslint-disable-line
            .keys(obj)
            .reduce((memo, key) => mapSub(obj[key], `${name}${key}`, key, obj), {});
          return levelUp;
        }
        return Object
          .keys(obj)
          .reduce((memo, key) => mapSub(obj[key], `${name}${key}`, key, obj), {});
      }

      levelUp[param] = name; // eslint-disable-line
      return levelUp;
    }
  };
}

/**
 * @param {Object} obj
 * @return {boolean}
 */
function containsObject(obj) {
  return Object
    .keys(obj)
    .reduce((memo, key) => {
      const val = obj[key];
      return memo || (typeof val === 'object' && val !== null && key !== 'shadowOffset');
    }, false);
}

export default StyleConverter;
