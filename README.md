# IFAE Personal Pages

IFAE personal pages are build with [Lektor](https://www.getlektor.com/) & [Bootstrap 4](http://getbootstrap.com/)

Each personal page is under a folder in the content folder. The folder is named with name initial + surname.

Examples:


## Structure of the personal Pages
The content these pages can accommodate is the following (see [person.ini](https://github.com/IFAE/people/blob/master/models/person.ini) model for details)

#### Personal Information
- Name, string, mandatory
- Surname, string, mandatory
- Profile Pic, image file, mandatory
- Division, [Experimental Division, Theory Division], mandatory
- Group, string, [ATLAS Group, Observational Cosmology Group, Gamma Ray Group, Neutrinos Group, Applied Physics Group], mandatory
- Position, [Doctoral Student, Post-Doc, Research Professor, Research Associate Professor], mandatory
- Email, string, mandatory
- Phone, string, optional
- LinkedIn, string, optional
- ResearcherID, string, optional
- ORCID, string, optional

Other can be possible on demand, like Github repos. Ask IFAE's communication team.

#### Research Information
Research inforation is organized in tabs. Tabs are optional, choose the ones that would better reflect your work (more than two).

- About Me, markdown text and pics
- Research, markdown text and pics
- Publications, list of publications (3 lines each + links)
- Projects, list of projects (for PIs) (3 lines each + links)
- Talks , list of scientific talks
- Outreach, list of outreach activities (3 lines each + links)
- Patents, list of Patents (3 lines each + links)
- Awards, list of awards
- CV, link to pdf you host in a service like Gdrive or dropbox for better maintainance.

Other can be possible on demand

## How to create a personal page

1. Compile all the information in a text and image files and get in contact with IFAE's communication team.

2. Build yourself the text file that will be compiled into html. Then send it to the communication team together with the image files.

Here's and [example of text file](https://github.com/IFAE/people/blob/master/content/csanchez/contents.lr) for this [personal page](http://ifaews01.pic.es/people/csanchez/)
You can also find other examples in the [content folder of this repo](https://github.com/IFAE/people/tree/master/content)

3. Install lektor, clone this repo, build your page under your folderand do a pull request.