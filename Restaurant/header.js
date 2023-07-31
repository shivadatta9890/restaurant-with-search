import './header.css';

const Header = ()=>{
    return (
        <>
        <header>
      <a className="logo"><i class="fab fa-facebook"></i>food</a>

      <nav className="navbar">
        <a href="#">home</a>
        <a href="#">wallet</a>
        <a href="#">favourite</a>
        <a href="#">login</a>
        <a href="#">sign up</a>
        <a href="#">cart</a>
      </nav>
    </header>
    {/* <!-- header ends here -->
    <!-- home starts here --> */}
     <section className="home" id="home">
      <div className="content">
        <h3>food made with love</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          minima perspiciatis reprehenderit provident placeat totam recusandae,
          aperiam quos pariatur repudiandae.
        </p>
        <a href="#" class="btn">Order Now</a>
      </div>
      <div className="image">
       <img src="https://img.freepik.com/premium-photo/big-double-cheddar-cheeseburger-with-chicken-cutlet_147620-1306.jpg?size=626&ext=jpg&ga=GA1.2.1254422938.1676360529&semt=ais" alt="food"/>
      </div>
    </section>
        </>
    )
}
export default Header;