import React from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import sessionStore from '@/common/sessionStoreComponent';
import CommonConfig from '@/common/commonConfig';

const ACCESSTOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ6NEdBTTdPNFpFU0Q3elEzOVNqOTRlVlhqWW5xcUhiM0V4UUczNVhkV2FzIn0.eyJleHAiOjE2OTEwMDYzMjUsImlhdCI6MTY5MDk4ODMyNSwianRpIjoiZDkwZjc5ZTQtYmM0Zi00ZTVmLTlmMjItY2IwNTkzNGFhMDdkIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo5MDgwL2F1dGgvcmVhbG1zL2poaXBzdGVyIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImY3NDJiYTZmLTFkOGEtNGRlYy1iZjE1LWUwMmRhYjUwODI4MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImludGVybmFsIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiY2xpZW50SG9zdCI6IjE3Mi4xOC4wLjEiLCJjbGllbnRJZCI6ImludGVybmFsIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LWludGVybmFsIiwiY2xpZW50QWRkcmVzcyI6IjE3Mi4xOC4wLjEifQ.EQ51THnz9HH7OxjAGrsHdF19d6bOnTJJs73mGiib3zRuEeBWSr2Ppg14Wb9PrOQhoGaB3Iiq9p-Fn9l7Lz5jEtzXsRV1R9EaOngrOdV5Z0pv6EKzmekU9smMLCNjGI7sprtAYdaYOPOPPw7cr06z25Iwiqae-do6bFUpKzRqIOQuNp_kMmx1_8HOmjTu3JNSPis9amPWZMtoBgxXXcetZmjV87Q-D4bh6nnr0pUU52zKmAvqYb7lis-0sObJWdqrASdMl5fD_7pjF32sCblsIRoqxRIv92EwP3El1Ascd12riT68kMr11ptMYLeng_cr9j0Qq4lrUhtprFMzFjdzLA";

function Login() {
  const session = new sessionStore();
  const router = useRouter();

  const _handleLogin = () =>{
    session.storeSecureData(CommonConfig.SESSION_TOKEN, ACCESSTOKEN);
    router.push('dashboard')
  }

  
  return (
    <>
      <main>
        <div className="container">

          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                  <div className="d-flex justify-content-center py-4 login">
                    <Link href="index.html" className="logo d-flex align-items-center w-auto">
                      <img src="assets/img/logo.png" alt="" />
                      <span className="d-none d-lg-block">SunTree</span>
                    </Link>
                  </div>

                  <div className="card mb-3">

                    <div className="card-body">

                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                        <p className="text-center small">Enter your username & password to login</p>
                      </div>

                      <div className="row g-3 needs-validation" >

                        <div className="col-12">
                          <label  className="form-label">Username</label>
                          <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" name="username" className="form-control" id="yourUsername"  />
                            <div className="invalid-feedback">Please enter your username.</div>
                          </div>
                        </div>

                        <div className="col-12">
                          <label className="form-label">Password</label>
                          <input type="password" name="password" className="form-control" id="yourPassword"  />
                          <div className="invalid-feedback">Please enter your password!</div>
                        </div>

                        <div className="col-12">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                            <label className="form-check-label" >Remember me</label>
                          </div>
                        </div>
                        <div className="col-12">
                          {/* <Link onClick={_handleLogin} href="/dashboard" className="btn btn-primary w-100">Login</Link> */}
                          <button onClick={_handleLogin} className="btn btn-primary w-100">Login</button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">Don't have account? <Link href="pages-register.html">Create an account</Link></p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Login;