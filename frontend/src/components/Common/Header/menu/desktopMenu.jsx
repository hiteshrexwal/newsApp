import React, { Component } from 'react'
 
class DesktopMenu extends Component {
    render() {
        return (
            <div class="wrap-main-nav">
				<div class="main-nav">
					<nav class="menu-desktop">
						<a class="logo-stick" href="index.html">
							<img src="images/icons/logo-01.png" alt="LOGO"/>
						</a>
                        <ul class="main-menu">
							<li class="main-menu-active">
								<a href="index.html">Home</a>
								<ul class="sub-menu">
									<li><a href="index.html">Homepage v1</a></li>
									<li><a href="home-02.html">Homepage v2</a></li>
									<li><a href="home-03.html">Homepage v3</a></li>
								</ul>
							</li>
                            <li class="mega-menu-item">
								<a href="category-01.html">News</a>

								<div class="sub-mega-menu">
									<div class="nav flex-column nav-pills" role="tablist">
										<a class="nav-link active" data-toggle="pill" href="#news-0" role="tab">All</a>
										<a class="nav-link" data-toggle="pill" href="#news-1" role="tab">Entertaiment</a>
										<a class="nav-link" data-toggle="pill" href="#news-2" role="tab">Fashion</a>
										<a class="nav-link" data-toggle="pill" href="#news-3" role="tab">Life Style</a>
										<a class="nav-link" data-toggle="pill" href="#news-4" role="tab">Technology</a>
										<a class="nav-link" data-toggle="pill" href="#news-5" role="tab">Travel</a>
									</div>

									<div class="tab-content">
										<div class="tab-pane show active" id="news-0" role="tabpanel">
											<div class="row">
												<div class="col-3">
													<div>
														<a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
															<img src="images/post-05.jpg" alt="IMG"/>
														</a>

														<div class="p-t-10">
															<h5 class="p-b-5">
																<a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span class="cl8">
																<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
																	Music
																</a>

																<span class="f1-s-3 m-rl-3">
																	-
																</span>

																<span class="f1-s-3">
																	Feb 18
																</span>
															</span>
														</div>
													</div>
												</div>

												<div class="col-3">
													<div>
														<a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
															<img src="images/post-10.jpg" alt="IMG"/>
														</a>

														<div class="p-t-10">
															<h5 class="p-b-5">
																<a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span class="cl8">
																<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
																	Finance
																</a>

																<span class="f1-s-3 m-rl-3">
																	-
																</span>

																<span class="f1-s-3">
																	Jan 15
																</span>
															</span>
														</div>
													</div>
												</div>

												<div class="col-3">
													<div>
														<a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
															<img src="images/post-14.jpg" alt="IMG"/>
														</a>

														<div class="p-t-10">
															<h5 class="p-b-5">
																<a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span class="cl8">
																<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
																	Beach
																</a>

																<span class="f1-s-3 m-rl-3">
																	-
																</span>

																<span class="f1-s-3">
																	Feb 12
																</span>
															</span>
														</div>
													</div>
												</div>

												<div class="col-3">
													<div>
														<a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
															<img src="images/post-36.jpg" alt="IMG"/>
														</a>

														<div class="p-t-10">
															<h5 class="p-b-5">
																<a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span class="cl8">
																<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
																	Technology
																</a>

																<span class="f1-s-3 m-rl-3">
																	-
																</span>

																<span class="f1-s-3">
																	Jan 20
																</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class="tab-pane" id="news-1" role="tabpanel">
											<div class="row">
												<div class="col-3">
													<div>
														<a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
															<img src="images/post-50.jpg" alt="IMG"/>
														</a>

														<div class="p-t-10">
															<h5 class="p-b-5">
																<a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span class="cl8">
																<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
																	Music
																</a>

																<span class="f1-s-3 m-rl-3">
																	-
																</span>

																<span class="f1-s-3">
																	Feb 18
																</span>
															</span>
														</div>
													</div>
												</div>

												<div class="col-3">
													{/* <!-- Item post -->	 */}
													<div>
														<a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
															<img src="images/post-08.jpg" alt="IMG"/>
														</a>

														<div class="p-t-10">
															<h5 class="p-b-5">
																<a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span class="cl8">
																<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
																	Music
																</a>

																<span class="f1-s-3 m-rl-3">
																	-
																</span>

																<span class="f1-s-3">
																	Feb 12
																</span>
															</span>
														</div>
													</div>
												</div>

												<div class="col-3">
													{/* <!-- Item post -->	 */}
													<div>
														<a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
															<img src="images/post-07.jpg" alt="IMG"/>
														</a>

														<div class="p-t-10">
															<h5 class="p-b-5">
																<a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span class="cl8">
																<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
																	Music
																</a>

																<span class="f1-s-3 m-rl-3">
																	-
																</span>

																<span class="f1-s-3">
																	Jan 20
																</span>
															</span>
														</div>
													</div>
												</div>

												<div class="col-3">
													{/* <!-- Item post -->	 */}
													<div>
														<a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
															<img src="images/post-06.jpg" alt="IMG"/>
														</a>

														<div class="p-t-10">
															<h5 class="p-b-5">
																<a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span class="cl8">
																<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
																	Music
																</a>

																<span class="f1-s-3 m-rl-3">
																	-
																</span>

																<span class="f1-s-3">
																	Jan 15
																</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class="tab-pane" id="news-2" role="tabpanel">
											<div class="row">
												<div class="col-3">
													{/* <!-- Item post -->	 */}
													<div>
														<a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
															<img src="images/post-21.jpg" alt="IMG"/>
														</a>

														<div class="p-t-10">
															<h5 class="p-b-5">
																<a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span class="cl8">
																<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
																	Music
																</a>

																<span class="f1-s-3 m-rl-3">
																	-
																</span>

																<span class="f1-s-3">
																	Feb 18
																</span>
															</span>
														</div>
													</div>
												</div>

												<div class="col-3">
													{/* <!-- Item post -->	 */}
													<div>
														<a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
															<img src="images/post-24.jpg" alt="IMG"/>
														</a>

														<div class="p-t-10">
															<h5 class="p-b-5">
																<a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span class="cl8">
																<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
																	Music
																</a>

																<span class="f1-s-3 m-rl-3">
																	-
																</span>

																<span class="f1-s-3">
																	Jan 15
																</span>
															</span>
														</div>
													</div>
												</div>

												<div class="col-3">
													{/* <!-- Item post -->	 */}
													<div>
														<a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
															<img src="images/post-22.jpg" alt="IMG"/>
														</a>

														<div class="p-t-10">
															<h5 class="p-b-5">
																<a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span class="cl8">
																<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
																	Music
																</a>

																<span class="f1-s-3 m-rl-3">
																	-
																</span>

																<span class="f1-s-3">
																	Feb 12
																</span>
															</span>
														</div>
													</div>
												</div>

												<div class="col-3">
													{/* <!-- Item post -->	 */}
													<div>
														<a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
															<img src="images/post-23.jpg" alt="IMG"/>
														</a>

														<div class="p-t-10">
															<h5 class="p-b-5">
																<a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span class="cl8">
																<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
																	Music
																</a>

																<span class="f1-s-3 m-rl-3">
																	-
																</span>

																<span class="f1-s-3">
																	Jan 20
																</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class="tab-pane" id="news-3" role="tabpanel">
											<div class="row">
												<div class="col-3">
													{/* <!-- Item post -->	 */}
													<div>
														<a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
															<img src="images/post-25.jpg" alt="IMG"/>
														</a>

														<div class="p-t-10">
															<h5 class="p-b-5">
																<a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span class="cl8">
																<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
																	Music
																</a>

																<span class="f1-s-3 m-rl-3">
																	-
																</span>

																<span class="f1-s-3">
																	Feb 18
																</span>
															</span>
														</div>
													</div>
												</div>

												<div class="col-3">
													{/* <!-- Item post -->	 */}
													<div>
														<a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
															<img src="images/post-27.jpg" alt="IMG"/>
														</a>

														<div class="p-t-10">
															<h5 class="p-b-5">
																<a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span class="cl8">
																<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
																	Music
																</a>

																<span class="f1-s-3 m-rl-3">
																	-
																</span>

																<span class="f1-s-3">
																	Jan 20
																</span>
															</span>
														</div>
													</div>
												</div>

												<div class="col-3">
													{/* <!-- Item post -->	 */}
													<div>
														<a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
															<img src="images/post-26.jpg" alt="IMG"/>
														</a>

														<div class="p-t-10">
															<h5 class="p-b-5">
																<a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span class="cl8">
																<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
																	Music
																</a>

																<span class="f1-s-3 m-rl-3">
																	-
																</span>

																<span class="f1-s-3">
																	Feb 12
																</span>
															</span>
														</div>
													</div>
												</div>

												<div class="col-3">
													{/* <!-- Item post -->	 */}
													<div>
														<a href="blog-detail-01.html" class="wrap-pic-w hov1 trans-03">
															<img src="images/post-34.jpg" alt="IMG"/>
														</a>

														<div class="p-t-10">
															<h5 class="p-b-5">
																<a href="blog-detail-01.html" class="f1-s-5 cl3 hov-cl10 trans-03">
																	Donec metus orci, malesuada et lectus vitae
																</a>
															</h5>

															<span class="cl8">
																<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
																	Music
																</a>

																<span class="f1-s-3 m-rl-3">
																	-
																</span>

																<span class="f1-s-3">
																	Jan 15
																</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
export default DesktopMenu