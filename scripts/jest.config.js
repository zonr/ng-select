module.exports = {
    'rootDir': '../',
    'globals': {
        'NODE_ENV': 'test',
        '__TRANSFORM_HTML__': true,
        'ts-jest': {
            'tsConfigFile': `./tsconfig.test.json`
        }
    },
    'modulePaths': [
        `<rootDir>/src/`
    ],
    'roots': [
        `<rootDir>/src/`
    ],
    'moduleFileExtensions': [
        'ts',
        'js',
        'html'
    ],
    'testMatch': [
        `<rootDir>/src/**/?(*.)(spec|test).ts?(x)`
    ],
    'setupTestFrameworkScriptFile': `<rootDir>/scripts/jest.init.js`,
    'transformIgnorePatterns': [
        '[/\\\\]node_modules[/\\\\].+\\.(js|ts)$'
    ],
    'watchPathIgnorePatterns': [
        '<rootDir>/node_modules/',
        '<rootDir>/Content/dist/'
    ],
    'transform': {
        '^.+\\.(scss|css)$': '<rootDir>/node_modules/jest-css-modules',
        '^.+\\.(ts|js|html)$': '<rootDir>/scripts/preprocessor.js'
    }
};
