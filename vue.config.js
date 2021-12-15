module.exports = {
    pluginOptions: {
    electronBuilder: {
        builderOptions: {
            productName: "Knock Notes",
            appId: 'bohordo.codes',
            win: {
                "target": [
                    "nsis"
                ],
              icon: 'public/svg.png',
              "requestedExecutionLevel": "requireAdministrator"
            },
            "nsis": {
                "installerIcon": "public/favicon.ico",
                "uninstallerIcon": "public/favicon.ico",
                "uninstallDisplayName": "CPU Monitor",
                "license": "license.txt",
                "oneClick": false,
                "allowToChangeInstallationDirectory": true
            }
        },
    },
},
}