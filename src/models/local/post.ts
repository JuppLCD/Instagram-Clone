import { postsData, profilePostData } from '../../data/post';

export default class PostModel {
	getHome(currentUserId: number) {
		console.log(`Obteninendo los post para la pagina de inicio del usuario con id: ${currentUserId}`);

		return postsData;
	}
	getProfile(userId: number) {
		console.log(`Obteninendo los post del perfil del usuario con id: ${userId}`);

		return profilePostData;
	}
}
