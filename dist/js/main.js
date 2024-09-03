"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const GITHUB_URL = "https://api.github.com/users/IsmaelNjama";
function getUserProfile() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(GITHUB_URL);
        const data = yield response.json();
        const image = data.avatar_url;
        const imageDiv = document.getElementById('profileImage');
        imageDiv.src = data.avatar_url;
        imageDiv.alt = 'Njama Peter Ismael';
        const profileNameDiv = data.name;
        const profileNameHolder = document.getElementById('profileName');
        profileNameHolder.innerHTML = profileNameDiv;
    });
}
getUserProfile();
//# sourceMappingURL=main.js.map