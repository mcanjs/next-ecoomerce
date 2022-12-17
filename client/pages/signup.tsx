import { FormEvent, useState } from 'react';
import DatePicker from 'react-datepicker';
import PhoneInput from 'react-phone-input-2';

// Styles
import 'react-phone-input-2/lib/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import fetchJson from '@/utils/fetchJson';

export default function SignUp() {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);
  const [surname, setSurname] = useState<string | undefined>(undefined);
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [rePassword, setRePassword] = useState<string | undefined>(undefined);
  const [birthDate, setBirthDate] = useState<string | undefined>(
    new Date().toString()
  );

  async function onSubmit(e: FormEvent) {
    e.stopPropagation();
    e.preventDefault();

    const data = JSON.stringify({
      email,
      name,
      surname,
      password,
      phone,
      birthDate
    });
    fetchJson('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data
    });
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
              <div className="form-control grid grid-cols-12 gap-3">
                <div className="col-span-6">
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
                <div className="col-span-6">
                  <label htmlFor="repassword" className="label">
                    <span className="label-text">Re-password</span>
                  </label>
                  <input
                    id="repassword"
                    type="password"
                    placeholder="Enter re-password"
                    className="input input-bordered w-full"
                    onChange={e => setRePassword(e.currentTarget.value)}
                  />
                </div>
              </div>
              <div className="form-control grid grid-cols-12 gap-3">
                <div className="col-span-6">
                  <label htmlFor="name" className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter name"
                    className="input input-bordered w-full"
                    onChange={e => setName(e.currentTarget.value)}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="surname" className="label">
                    <span className="label-text">Surname</span>
                  </label>
                  <input
                    id="surname"
                    type="text"
                    placeholder="Enter surname"
                    className="input input-bordered w-full"
                    onChange={e => setSurname(e.currentTarget.value)}
                  />
                </div>
              </div>
              <div className="form-control grid grid-cols-12 gap-3">
                <div className="col-span-6">
                  <label htmlFor="phone" className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <PhoneInput
                    country={'tr'}
                    inputClass="!input !input-bordered !w-full !pl-[50px]"
                    buttonClass=""
                    onChange={value => setPhone(value)}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="birthdate" className="label">
                    <span className="label-text">Birthdate</span>
                  </label>
                  <DatePicker
                    onChange={(date: any) => setBirthDate(date)}
                    className="input input-bordered w-full"
                    placeholderText="Select birth date"
                    showYearDropdown
                    yearDropdownItemNumber={30}
                    scrollableYearDropdown
                    selected={(birthDate && new Date(birthDate)) || new Date()}
                    dateFormat="dd.MM.yyyy"
                  />
                </div>
              </div>
              <div className="card-actions mt-3">
                <button className="btn bg-orange-500 border-orange-500 normal-case">
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
