module.exports.users = {
    usersList : [],
    registeredUsers: [],
    add(value) {
        value.windows = 1;
        this.usersList.push(value)
    },
    openWindow(value) {
        this.usersList.find(function (item) {
            if (item.DID === value.DID) {
                item.windows++;
            }
        });
    },
    isRegistered(value) {
        for (let i = 0; i < this.registeredUsers.length; i++) {
            if(this.registeredUsers[i].value === value) return true
        }
        return false
    },
    registration(value) {
        this.changeNickName(value);
        this.registeredUsers = this.registeredUsers.filter(user => user.DID !== value.DID);
        this.registeredUsers.push(value)
    },
    changeNickName(value) {
        for (let i = 0; i < this.usersList.length; i++) {
            if(this.usersList[i].DID === value.DID) {
                this.usersList[i].nickName = value.value;
                return
            }
        }
    },
    remove(value) {
        this.usersList.find( item => {
            if (item.DID === value) {
                item.windows--;
                if (item.windows === 0) {
                    this.usersList = this.usersList.filter(item => {
                        return item.DID !== value
                    });
                }
            }
        });
    },
    isAlredyConnected(value) {
        for (let i = 0; i < this.usersList.length; i++) {
            if (this.usersList[i].DID === value) {
                return true
            }
        }
        return false
    }
};