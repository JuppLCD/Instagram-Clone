import { useState } from 'react';
import Modal from './Modal';

interface Props {
	showModal: boolean;
	closeModal: () => void;
}

export default function ModalPost({ showModal, closeModal }: Props) {
	return (
		<Modal>
			<div
				aria-hidden={`${showModal}`}
				className={`${
					showModal ? '' : 'hidden'
				} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full md:inset-0 max-h-full bg-black/50`}
				onClick={closeModal}
			>
				<div className='relative p-4 w-full max-w-2xl max-h-full m-auto' onClick={(e) => e.stopPropagation()}>
					{/* Modal content */}
					<div className='relative bg-white rounded-lg shadow'>
						{/* Modal header */}
						<div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
							<h3 className='text-xl font-semibold text-gray-90'>Terms of Service</h3>
							<button
								type='button'
								className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
								onClick={closeModal}
							>
								<svg
									className='w-3 h-3'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 14 14'
								>
									<path
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
									/>
								</svg>
								<span className='sr-only'>Close modal</span>
							</button>
						</div>
						{/* Modal body */}
						<div className='p-4 md:p-5 space-y-4'>
							<p className='text-base leading-relaxed text-gray-500'>
								With less than a month to go before the European Union enacts new consumer privacy laws for its
								citizens, companies around the world are updating their terms of service agreements to comply.
							</p>
							<p className='text-base leading-relaxed text-gray-500'>
								The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is
								meant to ensure a common set of data rights in the European Union. It requires organizations to notify
								users as soon as possible of high-risk data breaches that could personally affect them.
							</p>
						</div>
						{/* Modal footer */}
						<div className='flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b'>
							<button
								type='button'
								className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
								onClick={closeModal}
							>
								I accept
							</button>
							<button
								type='button'
								className='ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10'
								onClick={closeModal}
							>
								Decline
							</button>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
}

export function useModalPost() {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

	return { showModal, openModal, closeModal };
}
