import React from "react";

const Footer = () => {
  return (
<footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900 w-full bottom-0">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-black foa">Artision</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 foa">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 foa">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 foa">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline foa">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 foa-book">© 2022 <a href="https://flowbite.com/" class="hover:underline">Artision Inc™</a>. All Rights Reserved.
    </span>
</footer>

    
  );
};

export default Footer;
