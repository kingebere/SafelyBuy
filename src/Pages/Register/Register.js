import React, { useState } from 'react';
import styles from './Register.module.css';

import { useForm } from 'react-hook-form';

import config from '../../config';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Register = () => {
	const { register, handleSubmit, errors } = useForm();
	const [message, setMessage] = useState();

	{
		/**
		 *Logic for fetching the Endpoint for the POST Request
		 */
	}
	const onSubmit = (data, e) => {
		setMessage({
			data: 'Registration is in progress...',
			type: 'alert-warning',
		});
		fetch(`${config.baseUrl}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				const hasError = 'error' in data && data.error != null;
				setMessage({
					data: hasError ? data.error : 'Registered successfully',
					type: hasError ? 'alert-danger' : 'alert-success',
				});

				!hasError && e.target.reset();
			});
	};

	return (
		<>
			<Header />
			<div
				className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}
			>
				<div className={styles.registrationFormContainer}>
					{message && (
						<div
							className={`alert fade show d-flex ${message.type}`}
							role="alert"
						>
							{message.data}
							<span
								aria-hidden="true"
								className="ml-auto cursor-pointer"
								onClick={() => setMessage(null)}
							>
								&times;
							</span>
						</div>
					)}
					<fieldset className=" ">
						<div className={`${styles.headertext} text-center`}>
							Sign up on Safelybuy
						</div>

						<form
							onSubmit={handleSubmit(onSubmit)}
							noValidate
							autoComplete="off"
						>
							<div className="row">
								<div className="col-xl-6 col-lg-6 col-md-7 col-12">
									<div className="form-group">
										<label htmlFor="inputForName">First Name</label>
										<span className="mandatory">*</span>
										<input
											id="firstname"
											name="firstname"
											type="text"
											className={styles.formControlImportant}
											aria-describedby="Enter your name"
											placeholder="First Name"
											ref={register({
												required: {
													value: true,
													message: 'First Name',
												},
												minLength: {
													value: 6,
													message: 'Minimum 6 characters are allowed',
												},
												maxLength: {
													value: 255,
													message: 'Maximum 255 characters are allowed',
												},
											})}
										/>
										{errors.name && (
											<span className={`${styles.errorMessage} mandatory`}>
												{errors.name.message}
											</span>
										)}
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-7 col-12">
									<div className="form-group">
										<label>Last Name</label>
										<span className="mandatory">*</span>
										<input
											id="inputForlastname"
											name="lastname"
											type="text"
											className={styles.formControlImportant}
											aria-describedby="Enter your name"
											placeholder="First Name"
											ref={register({
												required: {
													value: true,
													message: 'First Name',
												},
												minLength: {
													value: 6,
													message: 'Minimum 6 characters are allowed',
												},
												maxLength: {
													value: 255,
													message: 'Maximum 255 characters are allowed',
												},
											})}
										/>
										{errors.name && (
											<span className={`${styles.errorMessage} mandatory`}>
												{errors.name.message}
											</span>
										)}
									</div>
								</div>
							</div>

							<div className="form-group">
								<label htmlFor="inputForEmail">Email address</label>
								<span className="mandatory">*</span>
								<input
									id="inputForEmail"
									name="email"
									type="email"
									className={styles.formControlImportant}
									aria-describedby="Enter email address"
									placeholder="Enter email address"
									ref={register({
										required: {
											value: true,
											message: 'Please enter your email address',
										},
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
											message: 'Enter a valid email address',
										},
										minLength: {
											value: 6,
											message: 'Minimum 6 characters are allowed',
										},
										maxLength: {
											value: 255,
											message: 'Maximum 255 characters are allowed',
										},
									})}
								/>
								{/**
								 * we provide validation configuration for email field above
								 * error message are displayed with code below
								 */}
								{errors.email && (
									<span className={`${styles.errorMessage} mandatory`}>
										{errors.email.message}
									</span>
								)}
							</div>
							<div className="form-group">
								<label htmlFor="phone">Phone number</label>
								<span className="mandatory">*</span>
								<input
									id="phone"
									name="phone"
									type="phone"
									className={styles.formControlImportant}
									aria-describedby="Enter phone-number"
									placeholder="Enter phone-number"
									ref={register({
										required: {
											value: true,
											message: 'Please enter your phone-number',
										},

										minLength: {
											value: 6,
											message: 'Minimum 6 characters are allowed',
										},
										maxLength: {
											value: 255,
											message: 'Maximum 255 characters are allowed',
										},
									})}
								/>
								{/**
								 * we provide validation configuration for phone field above
								 * error message are displayed with code below
								 */}
								{errors.phone && (
									<span className={`${styles.errorMessage} mandatory`}>
										{errors.phone.message}
									</span>
								)}
							</div>

							<div className="form-group">
								<label htmlFor="inputForPassword">Password</label>
								<span className="mandatory">*</span>
								<input
									type="password"
									name="password"
									className={styles.formControlImportant}
									id="inputForPassword"
									placeholder="Enter password"
									ref={register({
										required: {
											value: true,
											message: 'Please enter password',
										},
										minLength: {
											value: 6,
											message: 'Minimum 6 characters are allowed',
										},
										maxLength: {
											value: 255,
											message: 'Maximum 255 characters are allowed',
										},
									})}
								/>
								{errors.password && (
									<span className={`${styles.errorMessage} mandatory`}>
										{errors.password.message}
									</span>
								)}
							</div>
							<div className={styles.marginTop}>
								<div className="d-flex align-items-center justify-content-between">
									<div>
										<input
											type="checkbox"
											id="Check"
											name="Agree"
											value="Accept"
										/>
										<label className={styles.checkBox}>
											{' '}
											I agree to{' '}
											<span className={styles.checkboxText}>
												{' '}
												Terms and conditions
											</span>
										</label>
									</div>
									<button type="submit" className={`${styles.btnGreen} btn`}>
										Proceed &nbsp; &nbsp; &rarr;
									</button>
								</div>
							</div>
						</form>
						<div className={`${styles.headertext} text-center`}>
							<span className={styles.finalText}>
								{' '}
								Already have an account?
								<span className={styles.finalTextColored}> Sign in</span>
							</span>
						</div>
					</fieldset>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Register;
