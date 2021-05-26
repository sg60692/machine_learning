import React from 'react';
import './Projects.scoped.css';

function Projects() {
    return (
        <div>
            <form class="form-inline">
                <label class="sr-only" for="Name">Name</label>
                <input type="text" class="form-control mb-2 mr-sm-2" id="Name" placeholder="Jane Doe" />

                <label class="sr-only" for="Username">Username</label>
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">@</div>
                    </div>
                    <input type="text" class="form-control" id="Username" placeholder="Username" />
                </div>

                <div class="form-check mb-2 mr-sm-2">
                    <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
                    <label class="form-check-label" for="inlineFormCheck">
                        Remember me
                </label>
                </div>

                <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </form>

        </div>
    )
}
export default Projects;
