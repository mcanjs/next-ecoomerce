import fetchJson from '@/utils/fetchJson';
import useUser from '@/lib/useUser';
import { useState } from 'react';
import { FormEvent } from 'react';

export default function Login() {
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true
  });
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);

  async function onSubmit(e: FormEvent) {
    e.stopPropagation();
    e.preventDefault();
    const data = JSON.stringify({
      email,
      password
    });
    try {
      mutateUser(
        await fetchJson('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: data
        }),
        false
      );
    } catch (e) {}
  }

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="container mx-auto">
        <div className="card shadow-md">
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-control w-full">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter email address"
                  className="input input-bordered w-full"
                  onChange={e => setEmail(e.currentTarget.value)}
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="password" className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  className="input input-bordered w-full"
                  onChange={e => setPassword(e.currentTarget.value)}
                />
              </div>
              <div className="card-actions mt-3">
                <button className="btn bg-orange-500 border-orange-500 normal-case">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
